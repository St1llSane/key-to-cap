/* eslint-disable no-unused-vars */
export enum Token {
  Access = 'access_token',
  Refresh = 'refresh_token'
}

export enum QueryKey {
  User = 'User',
  Products = 'Products',
  IsUserAuth = 'IsUserAuth'
}

export enum PublicRoute {
  Home = '/',
  SignIn = '/sign-in',
  SignUp = '/sign-up'
}
export enum PrivateRoute {
  Profile = '/profile'
}
