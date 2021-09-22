import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../constants/api.constant';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient,
  ) { }

  // organization

  getOrganizationsByNeighbourhoodId(neighbourhoodId) {
    return this.http.get(API.PREFIX + API.GET_ORGANIZATIONS + '?neighbourhood=' + neighbourhoodId);
  }

  getOrganizationById(id): Observable<any> {
    return this.http.get(API.PREFIX + API.GET_ORGANIZATIONS + `${id}/`);
  }

  updateOrganizationLogo(organization): Observable<any> {
    const formData = new FormData();
    formData.append('logo', organization.logo);
    formData.append('id', organization.id);
    return this.http.put(API.PREFIX + API.UPDATE_ORGANIZATION_LOGO, formData);
  }

  updateOrganization(organization): Observable<any> {
    return this.http.put(API.PREFIX + API.GET_ORGANIZATIONS + `${organization.id}/`, organization);
  }

  addOrganizationVideoLink(payload): Observable<any> {
    return this.http.post(API.PREFIX + API.ADD_ORGANIZATION_VIDEO_LINK, payload);
  }

  removeOrganiztionVideoLink(payload): Observable<any> {
    return this.http.delete(API.PREFIX + API.REMOVE_ORGANIZATION_VIDEO_LINK + `${payload.id}/`);
  }

  addOrganizationImage(payload): Observable<any> {
    const formData = new FormData();
    formData.append('image', payload.image);
    formData.append('name', payload.name);
    formData.append('organization', payload.organization);
    return this.http.post(API.PREFIX + API.ADD_ORGANIZATION_IMAGE, formData);
  }

  removeOrganizationImage(payload): Observable<any> {
    return this.http.delete(API.PREFIX + API.REMOVE_ORGANIZATION_IMAGE + `${payload.id}/`);
  }

  // programs

  getProgramsByOrganization(organizationId: any): Observable<any> {
    return this.http.get(API.PREFIX + API.GET_PROGRAMS + '?organization=' + organizationId);
  }

  getProgramById(id): Observable<any> {
    return this.http.get(API.PREFIX + API.GET_PROGRAMS + `${id}/`);
  }

  addProgramVideoLink(payload): Observable<any> {
    return this.http.post(API.PREFIX + API.ADD_PROGRAM_VIDEO_LINK, payload);
  }

  removeProgramVideoLink(payload): Observable<any> {
    return this.http.delete(API.PREFIX + API.REMOVE_PROGRAM_VIDEO_LINK + `${payload.id}/`);
  }

  addProgramImage(payload): Observable<any> {
    const formData = new FormData();
    formData.append('image', payload.image);
    formData.append('name', payload.name);
    formData.append('program', payload.organization);
    return this.http.post(API.PREFIX + API.ADD_PROGRAM_IMAGE, formData);
  }

  removeProgramImage(payload): Observable<any> {
    return this.http.delete(API.PREFIX + API.REMOVE_PROGRAM_IMAGE + `${payload.id}/`);
  }

  updateProgram(program): Observable<any> {
    return this.http.put(API.PREFIX + API.UPDATE_PROGRAM + `${program.id}/`, program);
  }

  removeProgram(program): Observable<any> {
    return this.http.delete(API.PREFIX + API.GET_PROGRAMS + `${program.id}/`);
  }

  createProgram(program): Observable<any> {
    return this.http.post(API.PREFIX + API.GET_PROGRAMS, program);
  }
}
