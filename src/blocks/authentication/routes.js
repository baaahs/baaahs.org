import React from 'react';

// Building blocks Authentication components
import {
  IndexView as AuthIndexView,
  SimpleSignUpForm as SimpleSignUpFormView,
  SignUpFormWithCoverImage as SignUpFormWithCoverImageView,
  SimpleSignInForm as SimpleSignInFormView,
  SignInFormWithCoverImage as SignInFormWithCoverImageView,
  ResetPasswordSimpleForm as ResetPasswordSimpleFormView,
  AuthFormWithDarkBg as AuthFormWithDarkBgView,
} from 'blocks/authentication';

const routes = [
  {
    path: '/blocks/authentication',
    renderer: (params = {}) => <AuthIndexView {...params} />,
  },
  {
    path: '/blocks/authentication/simple-sign-up-form',
    renderer: (params = {}) => <SimpleSignUpFormView {...params} />,
  },
  {
    path: '/blocks/authentication/sign-up-form-with-cover-image',
    renderer: (params = {}) => <SignUpFormWithCoverImageView {...params} />,
  },
  {
    path: '/blocks/authentication/simple-sign-in-form',
    renderer: (params = {}) => <SimpleSignInFormView {...params} />,
  },
  {
    path: '/blocks/authentication/sign-in-form-with-cover-image',
    renderer: (params = {}) => <SignInFormWithCoverImageView {...params} />,
  },
  {
    path: '/blocks/authentication/reset-password-simple-form',
    renderer: (params = {}) => <ResetPasswordSimpleFormView {...params} />,
  },
  {
    path: '/blocks/authentication/auth-form-with-dark-bg',
    renderer: (params = {}) => <AuthFormWithDarkBgView {...params} />,
  },
];

export default routes;
