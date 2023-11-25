import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const ReviewCard = ({
  reviewerName,
  reviewerImage,
  reviewDescription,
  propertyTitle,
}) => {
  return (
    <Card
      style={{
        display: "flex",
        width: "100%",
        height: "170px",
        padding: "30px",
        backgroundColor: "rgba(255, 255, 255, 0.450)",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Avatar
        src={"reviewerImage"}
        alt={"reviewerName"}
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "10%",
        }}
      />
      <CardContent style={{ flex: 1, padding: "20px" }}>
        <Typography variant="h5">{"reviewerName"}</Typography>
        <Typography variant="body1" paragraph>
          {"reviewDescription"}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <strong>Property:</strong> {"propertyTitle"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
