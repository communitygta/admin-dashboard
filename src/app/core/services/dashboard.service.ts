import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { API } from '../constants/api.constant';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getAllNeighbourhoods(): Observable<any> {
    return this.http
      .get(API.PREFIX + API.NEIGHBOURHOODS)
      .pipe(pluck('results'));
  }

  createNeighbourhood(neighbourhood: { name: string }): Observable<any> {
    return this.http.post(API.PREFIX + API.NEIGHBOURHOODS, neighbourhood);
  }

  deleteNeighbourhood(neighbourhood: {
    id: string;
    name: string;
  }): Observable<any> {
    return this.http.delete(
      API.PREFIX + API.NEIGHBOURHOODS + `${neighbourhood.id}/`
    );
  }
  // end of neighbourhoods

  // languages
  getAllLanguages(): Observable<any> {
    return this.http.get(API.PREFIX + API.LANGUAGES).pipe(pluck('results'));
  }

  createLanguage(language: { name: string }): Observable<any> {
    return this.http.post(API.PREFIX + API.LANGUAGES, language);
  }

  deleteLanguage(language: { id: string; name: string }): Observable<any> {
    return this.http.delete(API.PREFIX + API.LANGUAGES + `${language.id}/`);
  }
  // end of languages

  // focuses
  getAllFocuses(): Observable<any> {
    return this.http.get(API.PREFIX + API.FOCUSES).pipe(pluck('results'));
  }

  createFocus(focus: { name: string }): Observable<any> {
    return this.http.post(API.PREFIX + API.FOCUSES, focus);
  }

  deleteFocus(focus: { id: string; name: string }): Observable<any> {
    return this.http.delete(API.PREFIX + API.FOCUSES + `${focus.id}/`);
  }
  // end of focuses

  getAllPopulationGroups(): Observable<any> {
    return this.http
      .get(API.PREFIX + API.POPULATION_GROUPS)
      .pipe(pluck('results'));
  }

  createPopulationGroup(populationGroup: { name: string }): Observable<any> {
    return this.http.post(API.PREFIX + API.POPULATION_GROUPS, populationGroup);
  }

  deletePopulationGroup(populationGroup: {
    id: string;
    name: string;
  }): Observable<any> {
    return this.http.delete(
      API.PREFIX + API.POPULATION_GROUPS + `${populationGroup.id}/`
    );
  }
  // end of population groups

  // organization

  getAllOrganizations(): Observable<any> {
    return this.http
      .get(API.PREFIX + API.GET_ORGANIZATIONS)
      .pipe(pluck('results'));
  }

  getOrganizationsByNeighbourhoodId(neighbourhoodId): Observable<any> {
    return this.http
      .get(
        API.PREFIX + API.GET_ORGANIZATIONS + '?neighbourhood=' + neighbourhoodId
      )
      .pipe(pluck('results'));
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
    return this.http.put(
      API.PREFIX + API.GET_ORGANIZATIONS + `${organization.id}/`,
      organization
    );
  }

  createOrganization(organization): Observable<any> {
    return this.http.post(API.PREFIX + API.GET_ORGANIZATIONS, organization);
  }

  deleteOrganization(organization): Observable<any> {
    return this.http.delete(
      API.PREFIX + API.GET_ORGANIZATIONS + `${organization.id}/`
    );
  }

  addOrganizationVideoLink(payload): Observable<any> {
    return this.http.post(
      API.PREFIX + API.ADD_ORGANIZATION_VIDEO_LINK,
      payload
    );
  }

  removeOrganiztionVideoLink(payload): Observable<any> {
    return this.http.delete(
      API.PREFIX + API.REMOVE_ORGANIZATION_VIDEO_LINK + `${payload.id}/`
    );
  }

  addOrganizationImage(payload): Observable<any> {
    const formData = new FormData();
    formData.append('image', payload.image);
    formData.append('name', payload.name);
    formData.append('organization', payload.organization);
    return this.http.post(API.PREFIX + API.ADD_ORGANIZATION_IMAGE, formData);
  }

  removeOrganizationImage(payload): Observable<any> {
    return this.http.delete(
      API.PREFIX + API.REMOVE_ORGANIZATION_IMAGE + `${payload.id}/`
    );
  }

  // programs

  getProgramsByOrganization(organizationId: any): Observable<any> {
    return this.http
      .get(
        API.PREFIX + API.GET_PROGRAMS_LIST + '?organization=' + organizationId
      )
      .pipe(pluck('results'));
  }

  getProgramsByNeighbourhood(neighbourhoodId: any): Observable<any> {
    return this.http
      .get(
        API.PREFIX + API.GET_PROGRAMS_LIST + '?neighbourhood=' + neighbourhoodId
      )
      .pipe(pluck('results'));
  }

  getAllPrograms(): Observable<any> {
    return this.http
      .get(API.PREFIX + API.GET_PROGRAMS_LIST)
      .pipe(pluck('results'));
  }

  getProgramById(id): Observable<any> {
    return this.http.get(API.PREFIX + API.GET_PROGRAMS_LIST + `${id}/`);
  }

  addProgramVideoLink(payload): Observable<any> {
    return this.http.post(API.PREFIX + API.ADD_PROGRAM_VIDEO_LINK, payload);
  }

  removeProgramVideoLink(payload): Observable<any> {
    return this.http.delete(
      API.PREFIX + API.REMOVE_PROGRAM_VIDEO_LINK + `${payload.id}/`
    );
  }

  addProgramImage(payload): Observable<any> {
    const formData = new FormData();
    formData.append('image', payload.image);
    formData.append('name', payload.name);
    formData.append('program', payload.program);
    return this.http.post(API.PREFIX + API.ADD_PROGRAM_IMAGE, formData);
  }

  removeProgramImage(payload): Observable<any> {
    return this.http.delete(
      API.PREFIX + API.REMOVE_PROGRAM_IMAGE + `${payload.id}/`
    );
  }

  updateProgram(program): Observable<any> {
    return this.http.put(
      API.PREFIX + API.UPDATE_PROGRAM + `${program.id}/`,
      program
    );
  }

  removeProgram(program): Observable<any> {
    return this.http.delete(API.PREFIX + API.GET_PROGRAMS + `${program.id}/`);
  }

  createProgram(program): Observable<any> {
    return this.http.post(API.PREFIX + API.GET_PROGRAMS, program);
  }
}
