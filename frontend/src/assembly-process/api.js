import http from '../http';

export default {
  getAssemblyProsesses (params = {}){
    return http.get('assembly-processes', { params });
  }
}