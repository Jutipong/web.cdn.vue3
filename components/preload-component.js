const PreLoadComponents = (appID, app) => {
  switch (parseInt(appID)) {
    case 1:
      App(app);
      Demo01Component(app);
      Demo02Component(app);
      return true;
      break;
    default:
      console.warn("ไม่พบ appID สำหรับโหลด Component");
      return false;
      break;
  }
};
