import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { serverUrl } from '../App';
import { setCreatorCourseData } from '../redux/courseSlice';

const usePublishedCourse = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCourseData = async () => {
            try {
                const result = await axios.get(
                    serverUrl + "/api/course/getpublished",
                    { withCredentials: true }
                );
                dispatch(setCreatorCourseData(result.data));
                console.log(result.data);

            } catch (error) {
                console.log(error);
            }
        };

        getCourseData();
    }, [dispatch]);
};

export default usePublishedCourse;
