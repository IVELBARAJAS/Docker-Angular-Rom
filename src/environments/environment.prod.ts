export const environment = {
  production: true,
  API: {
    EndPoint: {
      Local: 'https://localhost:44308/api/producto',
      Docker: 'http://192.168.1.213:9090/api/producto',
      Azure:'https://romanis-api.azurewebsites.net/api/producto',
      Node:'http://localhost:3000/',
      DockerNode:'http://192.168.1.213:9000/'
    }
  }
};
