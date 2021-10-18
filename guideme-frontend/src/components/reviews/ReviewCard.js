import { Card, CardContent, CardHeader, Container, Typography, Button } from "@mui/material"
import { useState } from "react"

const ReviewCard = ({ review }) => {
  const [ showFull, setShowFull ] = useState(false);

  const toggleShow = () => {
    setShowFull(!showFull);
  }

  const fullText = () => {
   return <Button onClick={toggleShow}> full text </Button>
  }
  const hide = () => {
   return <Button onClick={toggleShow}> hide </Button>
  }
  
  return (
      <Card elevation={3} style={{marginBottom: 5, maxWidth: 400}}>
        <CardHeader
          title={review.title}
          subheader={`${review.rate}/10`}
          style={{margin:0, paddingBottom:0}}
        >
        </CardHeader>
        <CardContent>
          <Typography 
            style={showFull ? {wordWrap: 'break-word'} : {wordWrap: 'normal'}} 
            variant='body1' 
            fontSize={20}
          >
            {review.content}
          </Typography>
          {showFull ? hide() : fullText()}
         
          <Typography variant='subtitle1' fontSize={15}>
            By: {review.user.username}
          </Typography>
        </CardContent>
      </Card>
  )
}
export default ReviewCard