interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image{
    _type: "image";
    asset: {
        _ref:string;
        _type: "reference"
    }
}


export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

export interface Skill extends SanityBody{
    _type: "skill";
    image: Image;
    progress: number;
    name: string;
}

export interface Project extends SanityBody{
    _type: "project"
    image: Image,
    name: string;
    summary: string;
    technologies: Technology[];
    url: string; // Add new 'url' property to the Project type
}

interface Technology extends SanityBody{
    _type: "skill";
    image: Image;
    progress: number;
    name :string;
}

export interface Experience extends SanityBody{
    _type: "experience"
    company: string;
    companyImage: Image;
    dateStarted: string;
    dateEnded: string;
    isCurrentlyEmployedHere: bool;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}

export interface Social extends SanityBody{
    _type: "social";
    title: string;
    url: string;
}