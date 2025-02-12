import { useEffect } from "react"
import { GET_ALL_MAILS } from "../API/api"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { setEmail } from "../redux/appSlice"

const useGetAllMails = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchMails = async () => {
            try {
                const res = await axios.get(GET_ALL_MAILS, {
                    withCredentials: true
                });
                dispatch(setEmail(res.data.emails))
            } catch (error) {
                console.log(error);
            }
        }
        fetchMails();
    }, [])
}

export default useGetAllMails;