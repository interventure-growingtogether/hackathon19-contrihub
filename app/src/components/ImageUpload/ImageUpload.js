import React, { useState, useRef, useEffect } from 'react';
import { Upload, Icon, message } from 'antd';
import PropTypes from 'prop-types';

function getBase64(img, callback) {
	const reader = new FileReader();
	reader.addEventListener('load', () => callback(reader.result));
	reader.readAsDataURL(img);
}

function beforeUpload(file) {
	const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
	if (!isJpgOrPng) {
		message.error('You can only upload JPG/PNG file!');
	}
	const isLt2M = file.size / 1024 / 1024 < 2;
	if (!isLt2M) {
		message.error('Image must smaller than 2MB!');
	}

	return false;
}

export default function ImageUpload(props) {
	const [fileList, setFileList] = useState([]);

	useEffect(() => {
		if (props.shouldUpload) {
			const formData = new FormData();
			fileList.forEach(file => {
				formData.append('files[]', file);
			});

			console.log(formData.toString());
		}
	}, [props.shouldUpload, fileList]);

	function handleChange({ fileList }) {
		setFileList(fileList);
	}

	const uploadButton = (
		<div>
			<div className="ant-upload-text">Upload</div>
		</div>
	);

	function handleBeforeUpload(file) {
		return beforeUpload(file);
	}

	return (
		<Upload
			name="avatar"
			listType="picture-card"
			className="avatar-uploader"
			showUploadList={props.maxImages > 1}
			beforeUpload={handleBeforeUpload}
			onChange={handleChange}
			fileList={fileList}
		>
			{fileList.length >= props.maxImages ? null : uploadButton}
		</Upload>
	);
}

ImageUpload.defaultProps = {
	maxImages: 1,
	shouldUpload: false,
};

ImageUpload.propTypes = {
	maxImages: PropTypes.number,
	shouldUpload: PropTypes.bool,
};
