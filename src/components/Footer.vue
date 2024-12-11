<template>
    <footer>
      <div class="footer-columns">
        <div class="footer-column">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <p class="footer-copyright">© 2024 Your Company. All Rights Reserved.</p>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
<style lang="css" scoped>
footer {
  width: 100%;                    
  background-color: var(--background-footer-color); 
  padding: 96px 0;                
  box-sizing: border-box;         

  .footer-columns {
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: 20px;
    margin: 0 20px; 
  }

  .footer-copyright {
    text-align: center;
    color: var(--text-secondary-color);
    font-size: 0.9rem;
    margin-top: 20px;
  }

  hr {
    border-top: 1px solid var(--text-tertiary-color);
    margin: 20px 0;
  }

 
  @media (max-width: 768px) {
    .footer-columns {
      grid-template-columns: 1fr; 
      margin: 0 10px; 
    }
  }
}
</style>