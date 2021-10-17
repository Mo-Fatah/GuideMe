import { makeStyles } from "@mui/styles";
const useStyle = makeStyles(({ theme }) => {
  return {
    page: {
      background: '#f9f9f9',
      width: '100%',
      height: '100%',
    },
    
  }
})

const Layout = ({ children }) => {
  const classes = useStyle();

  return (
    <div className={classes.page}>
      <div className={classes.toolbar}>
        {children}
      </div>
    </div>
  )
}

export default Layout;