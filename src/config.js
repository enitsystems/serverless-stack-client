const dev = {
  STRIPE_KEY: "pk_test_odgJNCEJbqQIMwJL4ikWFNSz00o4Jy2CeN",
  s3: {
    REGION: "eu-central-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-zya6w76hl99m"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://uxmxw5ebrd.execute-api.eu-central-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_aSlfZBu24",
    APP_CLIENT_ID: "2km9fvjiatqmndvg0ukhhm4a4d",
    IDENTITY_POOL_ID: "eu-central-1:57aabec7-ebfb-4cff-843a-4a9e4f9e1d92"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_odgJNCEJbqQIMwJL4ikWFNSz00o4Jy2CeN",
  s3: {
    REGION: "eu-central-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1khtblnb48w6h"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://k4iv0jo8zj.execute-api.eu-central-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_Uu4q31gAO",
    APP_CLIENT_ID: "45086s618c54q9ke844fjdmdar",
    IDENTITY_POOL_ID: "eu-central-1:c397ba1a-82e7-48d9-ad79-33a432bc908b"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ?
  prod :
  dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};