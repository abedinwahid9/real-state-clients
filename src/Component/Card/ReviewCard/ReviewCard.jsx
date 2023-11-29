import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const ReviewCard = ({ reviewItem }) => {
  const { review, propertyTitle, reviewerImage, reviewerName } = reviewItem;
  return (
    <Card
      sx={{
        flexDirection: { sm: "row", xs: "column" },
        alignItems: "center",
      }}
      style={{
        display: "flex",

        padding: "30px",
        backgroundColor: "rgba(255, 255, 255, 0.450)",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Avatar
        src={reviewerImage}
        alt={reviewerImage}
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "10%",
        }}
      />
      <CardContent style={{ flex: 1, padding: "20px" }}>
        <Typography variant="h5">{reviewerName}</Typography>
        <Typography variant="body1" paragraph>
          {review}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <strong>Property:</strong> {propertyTitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
