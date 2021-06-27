const isAuthenticated = () => {
  const exp = localStorage.getItem("exp");
  const now = Date.now();
  
  if(exp > now) {
    location.assign('/index.html');
  }
};

isAuthenticated();