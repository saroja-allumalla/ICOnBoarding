import { Action } from '@ngrx/store';
import { Navigation } from '../models/navigation.model';

export const DISPLAY_BASIC_NAVIGATION = "[NAVIGATION] Basic";
export const DISPLAY_RECRUITER_NAVIGATION = "[NAVIGATION] Recruitor";
export const DISPLAY_RECRUITER_REVIEW = "[NAVIGATION] Review";
export const DISPLAY_RECRUITER_BACKGROUND = "[NAVIGATION] Background";
export const DISPLAY_CONSENT_NAVIGATION = "[NAVIGATION] Consent";
export const DISPLAY_RECRUITER_PAYMENT = "[NAVIGATION] Payment";
export const DISPLAY_RECRUITER_TRAINING = "[NAVIGATION] Training";
export const DISPLAY_RECRUITER_DOCUMENT ="[NAVIGATION] Document";
export const DISPLAY_RESUME_NAVIGATION = '[NAVIGATION] Resume';
export const DISPLAY_PERSONAL_INTERVIEW = "[NAVIGATION] Interview";
export const DISPLAY_DRIVER_BASIC_PROFILE_NAVIGATION = "[NAVIGATION] Profile";

export class displayRecruiterNavigation implements Action {
    readonly type = DISPLAY_RECRUITER_NAVIGATION
    public payload: Navigation[];
    constructor() {
        this.payload = [
            {
                Id: 1,
                Content: "Personal",
                Route: "/driver/driver",
                Visible: true,
            }, 
            {
                Id: 1,
                Content: "Vehicle",
                Route:  "/driver/vehicle",
                Visible: true
            },
            {
                Id: 2,
                Content: "Documents",
                Route: "/driver/steps",
                Visible: true
            },
            {
                Id: 3,
                Content: "Review",
                Route: "/driver/checklist",
                Visible: true
            }
        ]
    }
}

export class displayDriverBasicProfileNavigation implements Action {
    readonly type = DISPLAY_DRIVER_BASIC_PROFILE_NAVIGATION
    public payload: Navigation[];
    constructor() {
        this.payload = [{
            Id: 5,
            Content: "Personal Interview",
            Route: "/driver/personal-interview",
            Visible: true
        },
        {
            Id: 5,
            Content: "IC Basic Profile",
            Route: "/driver/basic-personal-info",
            Visible: true
        }]
    }
}

export class displayBackgroundNavigation implements Action {
    readonly type = DISPLAY_RECRUITER_BACKGROUND
    public payload: Navigation[];
    constructor() {
        this.payload = [
            {
                Id: 2, 
                Content: "Record Checks",
                Route: "/driver/background-check",
                Visible: true
            }, 
        ]
    }
}

export class displayConsentNavigation implements Action {
    readonly type = DISPLAY_CONSENT_NAVIGATION
    public payload: Navigation[];
    constructor() {
        this.payload = [{
            Id: 2,
            Content: "Consent Form",
            Route: "/driver/consent",
            Visible: true
        }
        ];
    }
}


export class displayPaymentNavigation implements Action {
    readonly type = DISPLAY_RECRUITER_PAYMENT
    public payload: Navigation[]
    constructor() {
        this.payload = [
            {
                Id: 2,
                Content: "Payment",
                Route: "/driver/payment",
                Visible: true
            }
        ]
    }
}

export class displayTrainingNavigation implements Action {
    readonly type = DISPLAY_RECRUITER_TRAINING
    public payload: Navigation[]
    constructor() {
        this.payload = [
            {
                Id: 2,
                Content: "Training",
                Route: "/driver/training",
                Visible: true
            }
        ]
    }
}

export class displayReviewNavigation implements Action {
    readonly type = DISPLAY_RECRUITER_REVIEW
    public payload: Navigation[]
    constructor() {
        this.payload = [
            {
                Id: 3,
                Content: "Review",
                Route: "/driver/checklist",
                Visible: true
            }
        ]
    }
}

export class displayRecruiterDocument implements Action {
    readonly type = DISPLAY_RECRUITER_DOCUMENT
    public payload: Navigation[]
    constructor() {
        this.payload = [
            {
                Id: 2,
                Content: "Other Documents",
                Route: "/driver/steps",
                Visible: true
            }
        ]
    }
}

export class displayBasicNavigation implements Action {
    readonly type = DISPLAY_BASIC_NAVIGATION
    public payload: Navigation[];
    constructor() {
        this.payload = [{
            Id: 1,
            Content: "General Quiz",
            Route: "/driver/quiz",
            Visible: true
        }]
    }
}


export class displayResumeNavigation implements Action {
    readonly type = DISPLAY_RESUME_NAVIGATION;
    public payload: Navigation[];
    constructor() {
        this.payload = [
            {
                Id: 1,
                Content: "Applications",
                Route: "/driver/recruiter",
                Visible: true
            }
        ]
    }
}

export class displayPersonalInterview implements Action {
    readonly type = DISPLAY_PERSONAL_INTERVIEW;
    public payload: Navigation[];
    constructor() {
        this.payload = [
            {
                Id: 1,
                Content: "Personal Interview",
                Route: "/driver/personal-interview",
                Visible: true
            }
        ]
    }
}

export type Actions = displayRecruiterNavigation | displayPaymentNavigation | displayTrainingNavigation | displayBackgroundNavigation | displayReviewNavigation | displayRecruiterDocument | displayDriverBasicProfileNavigation;