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

  getOptions(options: {
    neighbourhoods?: string;
    organizations?: string;
    languages?: string;
    focuses?: string;
    populationGroups?: string;
  }): Observable<any> {
    const qs = new URLSearchParams(options);
    return this.http.get(API.PREFIX + API.GET_GENERAL_OPTIONS + qs);
  }

  getAllNeighbourhoods(): Observable<any> {
    return this.http.get(API.PREFIX + API.NEIGHBOURHOOD_LIST);
  }

  createNeighbourhood(neighbourhood: { name: string }): Observable<any> {
    return this.http.post(API.PREFIX + API.NEIGHBOURHOOD_LIST, neighbourhood);
  }

  getNeighbourhood(neighbourhoodId): Observable<any> {
    return this.http.get(
      API.PREFIX + API.NEIGHBOURHOOD_DETAIL + neighbourhoodId
    );
  }

  deleteNeighbourhood(neighbourhood: {
    id: string;
    name: string;
  }): Observable<any> {
    return this.http.delete(
      API.PREFIX + API.NEIGHBOURHOOD_DETAIL + `${neighbourhood.id}`
    );
  }
  // end of neighbourhoods

  // languages
  getAllLanguages(): Observable<any> {
    return this.http.get(API.PREFIX + API.LANGUAGE_LIST);
  }

  createLanguage(language: { name: string }): Observable<any> {
    return this.http.post(API.PREFIX + API.LANGUAGE_LIST, language);
  }

  deleteLanguage(language: { id: string; name: string }): Observable<any> {
    return this.http.delete(
      API.PREFIX + API.LANGUAGE_DETAIL + `${language.id}`
    );
  }
  // end of languages

  // focuses
  getAllFocuses(): Observable<any> {
    return this.http.get(API.PREFIX + API.FOCUS_LIST);
  }

  createFocus(focus: { name: string }): Observable<any> {
    return this.http.post(API.PREFIX + API.FOCUS_LIST, focus);
  }

  deleteFocus(focus: { id: string; name: string }): Observable<any> {
    return this.http.delete(API.PREFIX + API.FOCUS_DETAIL + `${focus.id}`);
  }
  // end of focuses

  getAllPopulationGroups(): Observable<any> {
    return this.http.get(API.PREFIX + API.POPULATION_GROUP_LIST);
  }

  createPopulationGroup(populationGroup: { name: string }): Observable<any> {
    return this.http.post(
      API.PREFIX + API.POPULATION_GROUP_LIST,
      populationGroup
    );
  }

  deletePopulationGroup(populationGroup: {
    id: string;
    name: string;
  }): Observable<any> {
    return this.http.delete(
      API.PREFIX + API.POPULATION_GROUP_DETAIL + `${populationGroup.id}`
    );
  }
  // end of population groups

  // organization
  getAllOrganizations(): Observable<any> {
    return this.http.get(API.PREFIX + API.ORGANIZATION_LIST);
  }

  getOrganizationsByNeighbourhoodId(neighbourhoodId): Observable<any> {
    return this.http.get(
      API.PREFIX + API.ORGANIZATION_LIST + '?neighbourhood=' + neighbourhoodId
    );
  }

  getOrganizationById(id): Observable<any> {
    return this.http.get(API.PREFIX + API.ORGANIZATION_DETAIL + `${id}`);
  }

  updateOrganization(organization): Observable<any> {
    return this.http.put(
      API.PREFIX + API.ORGANIZATION_DETAIL + `${organization.id}`,
      organization
    );
  }

  createOrganization(organization): Observable<any> {
    return this.http.post(API.PREFIX + API.ORGANIZATION_LIST, organization);
  }

  deleteOrganization(organization): Observable<any> {
    return this.http.delete(
      API.PREFIX + API.ORGANIZATION_DETAIL + `${organization.id}`
    );
  }

  updateOrganizationLogo(organization): Observable<any> {
    const formData = new FormData();
    formData.append('logo', organization.logo);
    formData.append('id', organization.id);
    return this.http.put(API.PREFIX + API.UPDATE_ORGANIZATION_LOGO, formData);
  }

  addOrganizationVideoLink(payload): Observable<any> {
    return this.http.post(
      API.PREFIX + API.ADD_ORGANIZATION_VIDEO_LINK,
      payload
    );
  }

  removeOrganiztionVideoLink(payload): Observable<any> {
    return this.http.delete(
      API.PREFIX + API.REMOVE_ORGANIZATION_VIDEO_LINK + `${payload.id}`
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
      API.PREFIX + API.REMOVE_ORGANIZATION_IMAGE + `${payload.id}`
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
      API.PREFIX + API.REMOVE_PROGRAM_VIDEO_LINK + `${payload.id}`
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
      API.PREFIX + API.REMOVE_PROGRAM_IMAGE + `${payload.id}`
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
