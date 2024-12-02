import React, { useState, useEffect } from "react";
import styles from "./friend.module.css";

// import dynamic from 'next/dynamic'
import { useDispatch, useSelector } from "react-redux";
import { getFindFriend } from "../../../redux/actions/social";


const Friend = () => {
  const dispatch = useDispatch();
  // Static friend data
  const { myProfile } = useSelector((state) => {
    return state.loginReducer;
  });
  const { findFriend } = useSelector((state) => {
    return state.socialReducer;
  });
  //getFindFriend
  const friends = [
    { id: 1, name: "John Doe", imageUrl: "https://via.placeholder.com/50" },
    { id: 2, name: "Jane Smith", imageUrl: "https://via.placeholder.com/50" },
    { id: 3, name: "Sam Wilson", imageUrl: "https://via.placeholder.com/50" },
    { id: 4, name: "Alice Johnson", imageUrl: "https://via.placeholder.com/50" },
    { id: 5, name: "Bob Brown", imageUrl: "https://via.placeholder.com/50" },
    { id: 6, name: "Charlie Davis", imageUrl: "https://via.placeholder.com/50" },
    { id: 7, name: "Diana King", imageUrl: "https://via.placeholder.com/50" },
  ];
  // Handle follow button click
  const handleFollow = (friendId) => {
    console.log(`Followed friend with ID: ${friendId}`);
  };
  useEffect(() => {
    if(myProfile?.id){
    dispatch(getFindFriend(myProfile?.id));
    }
  
}, [myProfile]);


console.log(findFriend?.data,"findFriend")
  return (
    <div className={styles.find_friends}>
      <h2>Find Friends</h2>
      <div className={styles.friend_list}>
        {findFriend?.data&&findFriend?.data.map((friend) => (
          <div key={friend.id} className={styles.friend_card}>
            <img
              src={friend.avatar}
              alt={friend.name}
              className={styles.friend_image}
            />
            <div className={styles.friend_info}>
              <h3>{friend.name}</h3>
              <button
                className={styles.follow_button}
                onClick={() => handleFollow(friend.id)}
              >
                Follow
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friend;
