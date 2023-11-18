function getSubscriptionPrice(type) {

  switch(type){
    case "starter":
        console.log(0);
        break;
      case "professional":
        console.log(20);
        break;
      case "organization":
        console.log(50);
        break;
      default:
      console.log("Invalid subscribition type!")
  }
}
getSubscriptionPrice("professional")
getSubscriptionPrice("organization")
getSubscriptionPrice("starter")
getSubscriptionPrice("random")