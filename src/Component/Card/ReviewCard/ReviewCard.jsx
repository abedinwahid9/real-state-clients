import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { makeStyles } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 400,
    margin: "16px",
    backgroundColor: "#f5f5f5", // Change this to your desired background color
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  reviewDescription: {
    marginTop: "8px",
  },
}));

const ReviewCard = ({
  reviewerName,
  reviewerImage,
  reviewDescription,
  propertyTitle,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            className={classes.avatar}
            src={"reviewerImage"}
            alt={"reviewerName"}
          />
          <Typography variant="h6" style={{ marginLeft: "8px" }}>
            {"reviewerName"}
          </Typography>
        </div>
        <Typography variant="body2" className={classes.reviewDescription}>
          {"reviewDescription"}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          Property: {"propertyTitle"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
