module.exports = {
  confirm: (id) => ({
    subject: 'React Confirm Email',
    html: `Hi User,
      <a href='http://localhost:3002/users/confirm/${id}'>
        click to confirm email
      </a>
    `,      
    text: `test`
  })
  
}