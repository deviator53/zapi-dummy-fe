import React from 'react'
import OrganizationList from '../components/OrganizationList';
import { makeStyles } from '@mui/styles';
import ApiPageSidebar from '../components/ApiPageSidebar';

const useStyles = makeStyles({
  main: {
      display: 'flex',
      gap: '1rem',
  },
  org: {
      marginTop: '5rem'
  }
})

const OrgList = () => {
  const classes = useStyles()
  return (
    <div className={classes.main}>
       <section>
                <ApiPageSidebar
                    org="#org"
                />
            </section>
        <section className={classes.org}>
                    <OrganizationList
                        
                    />
                </section>
    </div>
  )
}

export default OrgList