import React, { useReducer, useEffect } from 'react';
import axios from 'axios'

const useFetchJobs = (param, page) => {
    // const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true })


    return {
        jobs: [],
        loading: true,
        error: false
    }
}
 
export default useFetchJobs;