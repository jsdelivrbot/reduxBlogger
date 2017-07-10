import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return(
      <div className='form-group'>
        <label>{field.label}</label>
        <input
          className='form-control'
          type='text'
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field
          name='title'
          label='Title'
          component={this.renderField} />
        <Field
          name='categories'
          label='Categories'
          component={this.renderField} />
        <Field
          name='content'
          label='Post Content'
          component={this.renderField} />
      </form>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Enter a title';
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }
  if (!values.content) {
    errors.content = 'Enter some post content please!';
  }

  return errors;
};

export default reduxForm({
  form: 'PostsNewForm',
  validate
})(PostsNew);
