import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Avatar,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
  Box,
  IconButton,
} from "@mui/material";
import {
  DeleteForeverOutlined,
  ModeEditOutlineOutlined,
} from "@mui/icons-material";
import axios from "axios";

const Blog = ({ title, content, image, userName, isUser, id }) => {
  const navigate = useNavigate();
  const handleEdit = (event) => {
    navigate(`/myBlogs/${id}`);
  };

  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:8000/api/blog/${id}`)
      .catch((err) => console.log(err));

    const data = res.data;
    return data;
  };

  const handleDelete = () => {
    deleteRequest().then(() => navigate("/"));
  };


  return (
    // <div>
    //   <Card
    //     sx={{
    //       width: "50%",
    //       margin: "auto",
    //       marginTop: 2,
    //       padding: 2,
    //       boxShadow: "5px 5px 10px #ccc",
    //       ":hover": { boxShadow: "10px 10px 20px #ccc" },
    //     }}
    //   >
    //     {isUser && (
    //       <Box display={"flex"}>
    //         <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
    //           <ModeEditOutlineOutlined color="info" />
    //         </IconButton>
    //         <IconButton onClick={handleDelete}>
    //           <DeleteForeverOutlined color="error" />
    //         </IconButton> 
    //       </Box>
    //     )}
    //     <CardHeader
    //       // avatar={
    //       //   <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
    //       //     {userName && userName.charAt(0)}
    //       //   </Avatar>
    //       // }
    //       title={title}
    //       subheader=""
    //     />
    //     <CardMedia
    //       component="img"
    //       height="194"
    //       image={image}
    //       alt="Paella dish"
    //     />
    //     <CardContent>
    //       <hr />
    //       <br />
    //       <Typography variant="body2" color="text.secondary">
    //         <b>{userName}</b> {": "}
    //         {content}
    //       </Typography>
    //     </CardContent>
    //   </Card>
    // </div>
    <>
      <div className="col">
      
        <div className="card h-100" style={{ width: '18rem' }}>
          {isUser && (
            <Box display={"flex"}>
              <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
                <ModeEditOutlineOutlined color="info" />
              </IconButton>
              <IconButton onClick={handleDelete}>
                <DeleteForeverOutlined color="error" />
              </IconButton>
            </Box>
          )}
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
