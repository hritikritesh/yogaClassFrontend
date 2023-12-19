# Yoga admission form

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Introduction 

User have to Signup and then user can Signin to select a slot and pay for it. Once a slot is booked then it can 
not be booked again. Maximum four slots can be booked.

Once loged in it will show homepage to book slots or booked slot page to see booked slot page.

Email verification is used so that only valid email can be used. Similarly password verification is also used 
so that strong password is set.

## Tools Used

1. React for making the react app.
2. fetch() method to request data from backend server.
3. useState from react to locally store user information.
4. jwt-decode to process to store signin token locally.
5. BrowserRouter, Routes, Route from react-router-dom for routing.
6. useNavigate from react-router-dom for redirection.
7. Modal is used to confirm user about logout.
8. Contrext is used to declare global variables.
9. useEffect is used to check change in component and run needful functions.

## How to deploy on vercel

1. Push your code to github.
2. Go to vercel homepage and click on add new project.
3. Import the repository you want to deploy.
4. If repository is not in list give vercel access to the particular repository.
5. During deployment select framework preset as "Create React App"
6. Leave root directory as it is.
7. Deploy !!

## References
1. https://legacy.reactjs.org/docs/getting-started.html
2. https://vercel.com/docs/frameworks/create-react-app

