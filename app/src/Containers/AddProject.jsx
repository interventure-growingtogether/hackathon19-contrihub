import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import CustomInput from "./Components/Input";
import ImageUpload from "../components/ImageUpload/ImageUpload";
import { database } from '../config/firebase';

import uuid from 'uuid';

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class AddProject extends Component {
    state = {
        shouldUpload: false
    };
    uid = uuid();

    componentDidMount() {
        // To disable submit button at the beginning.
        // eslint-disable-next-line react/prop-types
        this.props.form.validateFields();
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevState.shouldUpload && this.state.shouldUpload) {
            this.props.history.push('/');
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const { description, title, skillLevel, technologies, repo} = values;
                const project = {
                    description, title, skillLevel, technologies, repo
                };
                try {
                    database.ref(`projects/${this.uid}`).set({
                        project, id: this.uid
                    });
                    this.setState({shouldUpload: true});
                }
                catch(e){
                    console.log('eee: ', e);
                }
            }
        });
    };

    render () {
        // eslint-disable-next-line react/prop-types,no-unused-vars
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        const titleError = isFieldTouched('title') && getFieldError('title');
        const descriptionError = isFieldTouched('description') && getFieldError('description');
        const techError = isFieldTouched('technologies') && getFieldError('technologies');
        const repoError = isFieldTouched('repo') && getFieldError('repo');

        return (
            <Form layout="vertical" onSubmit={this.handleSubmit} style={{width: '100%', padding: '25px 25px'}}>
                <Row>
                    <Col span={8}>
                        <ImageUpload onChange={this.onImageUpload} prefixId={this.uid} maxImages={1} shouldUpload={this.state.shouldUpload}/>
                    </Col>
                    <Col span={16}>
                        <Form.Item validateStatus={titleError ? 'error' : ''} help={titleError || ''}>
                            {getFieldDecorator('title', {
                                rules: [{ required: true, message: 'Please input project title' }],
                            })(
                                <CustomInput placeholder="Project title"/>
                            )}
                        </Form.Item>
                        <Form.Item validateStatus={descriptionError ? 'error' : ''} help={descriptionError || ''}>
                            {getFieldDecorator('description', {
                                rules: [{ required: true, message: 'Please input project description!' }],
                            })(
                                <Input.TextArea
                                    style={{width: "400px"}}
                                    placeholder="Project description"
                                    rows={4}
                                />
                            )}
                        </Form.Item>
                        <Form.Item label="Technologies" validateStatus={techError ? 'technologies' : ''} help={techError || ''}>
                            {getFieldDecorator('technologies', {
                                rules: [{ required: true, message: 'Please input technologies!' }],
                            })(
                                <CustomInput
                                    style={{width: "180px"}}
                                    placeholder="Technologies"
                                />
                            )}
                        </Form.Item>
                        <Form.Item label="Skill level:">
                            {getFieldDecorator('skillLevel', {
                                initialValue: ['junior', 'medior', 'senior'],
                            })(
                                <Checkbox.Group style={{ width: '100%' }}>
                                    <Row>
                                        <Col span={8}>
                                            <Checkbox value="junior">Junior</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="medior">Medior</Checkbox>
                                        </Col>
                                        <Col span={8}>
                                            <Checkbox value="senior">Senior</Checkbox>
                                        </Col>
                                    </Row>
                                </Checkbox.Group>
                            )}
                        </Form.Item>

                        <Form.Item label="Repository" validateStatus={repoError ? 'technologies' : ''} help={repoError || ''}>
                            {getFieldDecorator('repo', {
                                rules: [{ required: true, message: 'Please input repository!' }],
                            })(
                                <CustomInput
                                    style={{width: "180px"}}
                                    placeholder="Repository"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button style={{alignSelf: 'center'}} type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                                Save & Publish
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
</Form>
        );
    }

}
const AddProjectForm = Form.create({ name: 'horizontal_login' })(AddProject);

export default AddProjectForm;
