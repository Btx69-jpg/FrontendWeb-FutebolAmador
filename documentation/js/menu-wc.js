'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                                <li class="link">
                                    <a href="overview.html" data-type="chapter-link">
                                        <span class="icon ion-ios-keypad"></span>Overview
                                    </a>
                                </li>

                            <li class="link">
                                <a href="index.html" data-type="chapter-link">
                                    <span class="icon ion-ios-paper"></span>
                                        README
                                </a>
                            </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>

                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/App.html" data-type="entity-link" >App</a>
                            </li>
                            <li class="link">
                                <a href="components/CalendarComponent.html" data-type="entity-link" >CalendarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CancelMatchComponent.html" data-type="entity-link" >CancelMatchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateMatchInvite.html" data-type="entity-link" >CreateMatchInvite</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateTeam.html" data-type="entity-link" >CreateTeam</a>
                            </li>
                            <li class="link">
                                <a href="components/Home.html" data-type="entity-link" >Home</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link" >LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LogoutComponent.html" data-type="entity-link" >LogoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MatchInvites.html" data-type="entity-link" >MatchInvites</a>
                            </li>
                            <li class="link">
                                <a href="components/PlayerListPageComponent.html" data-type="entity-link" >PlayerListPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PlayerMembershipRequestsPageComponent.html" data-type="entity-link" >PlayerMembershipRequestsPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PlayerProfilePageComponent.html" data-type="entity-link" >PlayerProfilePageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PlayerProfileRedirectComponent.html" data-type="entity-link" >PlayerProfileRedirectComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PostponeMatchComponent.html" data-type="entity-link" >PostponeMatchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SearchTeam.html" data-type="entity-link" >SearchTeam</a>
                            </li>
                            <li class="link">
                                <a href="components/SettingsPageComponent.html" data-type="entity-link" >SettingsPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SidebarComponent.html" data-type="entity-link" >SidebarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SignupComponent.html" data-type="entity-link" >SignupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TeamMembershipRequestsPageComponent.html" data-type="entity-link" >TeamMembershipRequestsPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TeamMembersPageComponent.html" data-type="entity-link" >TeamMembersPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TeamProfile.html" data-type="entity-link" >TeamProfile</a>
                            </li>
                            <li class="link">
                                <a href="components/Teams.html" data-type="entity-link" >Teams</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CalendarDto.html" data-type="entity-link" >CalendarDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CancelMatchDto.html" data-type="entity-link" >CancelMatchDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTeamDto.html" data-type="entity-link" >CreateTeamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterCalendarDto.html" data-type="entity-link" >FilterCalendarDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterListTeamDto.html" data-type="entity-link" >FilterListTeamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterMatchInviteDto.html" data-type="entity-link" >FilterMatchInviteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterMembershipRequestsPlayer.html" data-type="entity-link" >FilterMembershipRequestsPlayer</a>
                            </li>
                            <li class="link">
                                <a href="classes/InfoMatchInviteDto.html" data-type="entity-link" >InfoMatchInviteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/InfoRankDto.html" data-type="entity-link" >InfoRankDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/InfoTeamDto.html" data-type="entity-link" >InfoTeamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Match.html" data-type="entity-link" >Match</a>
                            </li>
                            <li class="link">
                                <a href="classes/MatchDto.html" data-type="entity-link" >MatchDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PitchDto.html" data-type="entity-link" >PitchDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Player.html" data-type="entity-link" >Player</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlayerDetailsDto.html" data-type="entity-link" >PlayerDetailsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlayerDto.html" data-type="entity-link" >PlayerDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlayerFilterDto.html" data-type="entity-link" >PlayerFilterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlayerTeamDto.html" data-type="entity-link" >PlayerTeamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PostponeMatchDto.html" data-type="entity-link" >PostponeMatchDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SendMatchInviteDto.html" data-type="entity-link" >SendMatchInviteDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TeamDetailsDto.html" data-type="entity-link" >TeamDetailsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TeamDto.html" data-type="entity-link" >TeamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTeamDto.html" data-type="entity-link" >UpdateTeamDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CalendarService.html" data-type="entity-link" >CalendarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MatchInviteService.html" data-type="entity-link" >MatchInviteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MembershipRequestService.html" data-type="entity-link" >MembershipRequestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlayerService.html" data-type="entity-link" >PlayerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TeamMembersService.html" data-type="entity-link" >TeamMembersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TeamService.html" data-type="entity-link" >TeamService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/MembershipRequest.html" data-type="entity-link" >MembershipRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PlayerDetails.html" data-type="entity-link" >PlayerDetails</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PlayerListItem.html" data-type="entity-link" >PlayerListItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TeamMember.html" data-type="entity-link" >TeamMember</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TeamMembersFilters.html" data-type="entity-link" >TeamMembersFilters</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpdatePlayerRequest.html" data-type="entity-link" >UpdatePlayerRequest</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise-inverted.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});