import React, { useRef } from 'react';
import { Text, View } from 'react-native';
import { useFormik } from 'formik';

import TextInput from '../components/TextInput';
import Button from '../components/Button';
import LoginSchema from '../schema/LoginSchema'

export default function Login() {
  const password = useRef(null);
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: '', password: '' },
    onSubmit: values =>
      alert(`Email: ${values.email}, Password: ${values.password}`)
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16 }}>
        Login
      </Text>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <TextInput
          icon='mail'
          placeholder='Enter your email'
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          onSubmitEditing={() => password.current?.focus()}
          error={errors.email}
          touched={touched.email}
          autoCapitalize='none'
          autoCompleteType='email'
          keyboardType='email-address'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <TextInput
          ref={password}
          icon='key'
          placeholder='Enter your password'
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          onSubmitEditing={() => handleSubmit()}
          error={errors.password}
          touched={touched.password}
          secureTextEntry
          autoCompleteType='password'
          autoCapitalize='none'
          keyboardAppearance='dark'
          returnKeyType='go'
          returnKeyLabel='go'
        />
      </View>
      <Button label='Login' onPress={handleSubmit} />
    </View>
  );
}