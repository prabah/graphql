import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Course from './course';

const Courses = () => (
    <Query
        query={gql`
      {
        allCourses {
          id
          title
          author
          description
          topic
          url
        }
      }
    `}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return data.allCourses.map(course  => (
                <div key={course.id}>
                    {/* <p>{`${course.title}`}</p> */}
                   {/* <Course  props = { course } /> */}
                </div>
            ));


        }}
    </Query>
);

export default Courses;