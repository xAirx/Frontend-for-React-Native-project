# Usage 

cd /confusion

npm install

yarn start ( if needed it will install expo cli)

Run your app with expo-cli and press i from the command line or Run on iOS simulator

&nbsp;
&nbsp;
&nbsp;
&nbsp;   
&nbsp;
&nbsp;
&nbsp;

# Frontend Feature Pipeline :



## Upgrading Navigation to 5.0 and implement hooks where necessesary in the components.




## Login functionality, registration


		### implementing Routing Logic that shows components (userpanel // adminpanel) based on JWT token and AUTH.

		### implementing conditional logic for  component adding: comment editing, posting and deleting based on user authentication.

		### Add frontend for Oauth functionality.
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

## User Panel setup
________________________________________


		###  User Panel Frontend structure

		###  Proper FileUploading functionality.

		#### Frontend Structure & User GET all the registered users' information from the database and see it in the UserPanel

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;


## Admin Panel setup
________________________________________


		###  Admin Panel Frontend structure

		### Proper FileUploading functionality.

		#### Frontend Structure & Admin GET all the registered users' information from the database and see it in the adminpanel

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;   
&nbsp;
&nbsp;
&nbsp;   
&nbsp;
&nbsp;
&nbsp;   
&nbsp;

## DEV LOG - React Native 

&nbsp;
&nbsp;
&nbsp;
&nbsp;


#### Part 1 : Navigators and Components. - done

      The Contact Us page is showing the address of the restaurant in the card format as shown above. - done

       The history information about the restaurant is displayed in a card format as shown above using a functional component named History(). - done

       The corporate leadership information is shown in the About Us page in the format as shown above. The leader information is renedered inside a Card. - done

       The AboutComponent is a included using the Stack Navigator and in the Drawer Navigator. - done

       The ContactComponent is a included using the Stack Navigator and in the Drawer Navigator. - done

 


#### Part 2 : UI elements and Redux - done

       Add an Action named ADD_COMMENT to the ActionTypes.js. - done

       Add two action creators named postComment() and addComment(). The postComment() creator will receive the dishId, rating, author and comment as the four parameters. - done

      Update the comments reducer function to handle the new ADD_COMMENT action and add the comment to the list of comments. The handling of the action should also ensure that appropriate ID will be added to the comment.- done


     The modal containing the form is correctly added to the Dishdetail component- done

     The form is correctly configured with the rating, author and comment fields.- done

     An Icon is added to the RenderDish Card that will trigger the showing of the modal.- done

      The ADD_COMMENT action is correctly added- done

      The postComment() action creator is correctly added- done

      The addComment() action creator is correctly added and will be dispatched by postComment() after a 2 sec delay- done

      The comment reducer is updated to handle the ADD_COMMENT action- done

      EXTRA: __________________________________________________________________

      The favorites redux integration now includes a toggle functionality.- done

       The POST_COMMENT now also allows us to correctly call the LOADING_COMMENTS and show the data dynamically on add.- done




#### Part 3: Animations, gestures and redux persist. - done


     The reservation form zooms in when the user navigates to the reservation view - done 


      An alert containing the information from the reservation form is shown when the user submits the filled reservation form. - done 
          If the user clicks on Cancel, then the form is cleared. - done 
          If the user clicks on OK, then the form is cleared. - done 


     When the user does a left to right gesture on the Dish details card in the Dishdetail component, toggle the comment form modal. - done
     

#### Part 4:  Calendar event API, Image Picker API Reservation Functionality with users calendar.- done

        In this task will make use of the Expo SDK ImagePicker API to enable application to fetch an image from the photo library.

          Update LoginComponent.js to set up a function named getImageFromGallery() that fetches the image from the photo library on the device using the ImagePicker API support.


         Details of setting up the source to be the Photo Library can be found in the API documentation.- done

         Add a new button named Gallery that when clicked will initiate the process to enable the user to select a picture from the photo library using the ImagePicker API.- done

          Once the image is picked, it must be processed through the ImageManipulator to obtain a resized PNG version of the image as we did in the exercise.- done

        In this task I will insert a new Calendar event into the default calendar on the mobile device for the table reservation.  will use the Calendar API from Expo SDK for this.  will implement this in the ReservationComponent.js file.

        When the user submits the reservation form,  will obtain the details of the reservation in the handleReservation() function.- done

          Implement a new function named obtainCalendarPermission() that will ask for permission to access the calendar on the device. The corresponding permission is Permission.CALENDAR.

         Implement another function named addReservationToCalendar() that receives the date information as a parameter. This function is invoked from the handleReservation() function.- done

         should use the createEventAsync() function from the Calendar API to insert the event into the default calendar (Calendar.DEFAULT). This function takes a title, the start and end time, timezone and location as the parameters.

        Use 'Con Fusion Table Reservation' as the title of the inserted event- done

        To specify the start Date and end Date,  can convert the Date ISO string into a Date object by using new Date(Date.parse(date)). Furthermore, the Date.parse() gives  the date value in milliseconds.  can set up the end time by adding 2 hours (2*60*60*1000) to the milliseconds and use it to generate the Date object corresponding to the end time of the event.- done

         For time zone use 'Asia/Hong_Kong', and the location as '121, Clear Water Bay Road, Clear Water Bay, Kowloon, Hong Kong' - done

         The LoginComponent.js is updated to implement the getImageFromGallery() function that uses the ImagePicker API to enable the fetching of the image from the photo library. - done

        The LoginComponent.js file is updated to include a button named Gallery that will initiate the procedure to enable the user to select a picture from the photo gallery. - done

         The image selected by the user is processed using the ImageManipulator to generate a PNG image - done

        The ReservationComponent.js file is modified to implement the obtainCalendarPermission() function that obtains permission to access the calendar - done

         The ReservationComponent.js file is modified to implement the addReservationToCalendar() function that inserts the event into the default calendar using the Calendar API.- done

        The details of the event are correctly inserted setting the title, start and end time and the location correctly. - done





&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;   

&nbsp;
&nbsp;
&nbsp;
&nbsp;   

&nbsp;
&nbsp;
&nbsp;
&nbsp;   

&nbsp;
&nbsp;
&nbsp;
&nbsp;   

&nbsp;
&nbsp;
&nbsp;
&nbsp;   
&nbsp;
&nbsp;
&nbsp;
&nbsp;   

&nbsp;
&nbsp;
&nbsp;
&nbsp;   
  ### Website made in React.js

&nbsp;
&nbsp;
&nbsp;
&nbsp;

  #### Goals: 

      Express the general characteristics of JavaScript frameworks and libraries
      Create a new project using React
      Create React components within a React application
      Express what is meant by full-stack web development
    
      Develop a React router based navigation to various views in a React application
      Develop a single page application using the React router support
      Give examples of various types of React components
    
      Create uncontrolled React forms
      Create controlled forms and perform form validation
      Discuss the features of the Flux architecture
      Explain the Redux approach to implementing a variant of the Flow architecture
    
      Create Redux Actions
      Develop Redux actions using Redux Thunk
      Develop client-server communication using Fetch
      Develop Fetch-based communication with a REST API server


&nbsp;
&nbsp;
&nbsp;
&nbsp;

   #### Features:


         Form handling &  Redux integration for form handling 
         
         *********** Redux integration to create a "Loading Component" using the activity indicator component
         Trigger showing of message when data is fetched from server.
    
         ***********Redux integration to "Star products" and rate them
    
         ***********Redux integration to handle the customers favorite products
         
         Redux Thunk middleware 
         
         React Animations for animations
         
         Redux For Client server communication with fetch.
         
         Feedback through the feedback form by creating a new feedback service that accepts the form data.

&nbsp;
&nbsp;
&nbsp;
&nbsp;
