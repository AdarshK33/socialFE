import { client } from "../../utils/axios";
import { myProfile } from "../../redux/actions/login";
import { useDispatch, useSelector } from "react-redux";

export const logoutApi = () => {
  // const dispatch = useDispatch();

  return (dispatch) => {
    client
      .get("/api/logout")
      .then((response) => {
        if (response?.status === 200) {
          console.log("logoutApi session expired");
          location.reload()
          dispatch(
            myProfile("")
          );
        }
      })
      .catch((err) => {
        console.log("logoutApi err", err);
      });
  };
};