import { Card, CardContent, CardHeader, Typography } from "@mui/material"

const ReviewCard = ({ review }) => {
  return (
    <Card elevation={3} style={{marginBottom: 5, maxWidth: 400}}>
      <CardHeader
        title={review.title}
        subheader={`${review.rate}/10`}
        style={{margin:0, paddingBottom:0}}
      ></CardHeader>
      <CardContent>
        <Typography variant='body1' fontSize={20}>
          {review.content}
        </Typography>
        <Typography variant='subtitle1' fontSize={15}>
          By: {review.user.username}
        </Typography>
      </CardContent>
    </Card>
  )
}
export default ReviewCard