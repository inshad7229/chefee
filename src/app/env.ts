const HTTP_TIMEOUT: number = 60000;

export interface Environment {
    mainApi: string;
    imgApi:string;
    img?:string;
    dealDoc?:string;
    analytics?: string;
    timeout: number;
    debug: boolean;
    bypass: boolean;
    chatApi:string;
    angularProd: boolean;
}

export const LOCAL: Environment = {
    mainApi: 'http://127.0.0.1:3002',
    chatApi: 'http://18.219.125.253:3004/', 
    imgApi:'http://13.58.136.175/public/img/profile_imgs/',
    timeout: HTTP_TIMEOUT,
    debug: true,
    bypass: true,
    angularProd: false
};
// http://13.58.136.175/dealiver-admin-apis/www/images/
export const DEV: Environment = {
    mainApi: 'http://18.221.208.210:3003/',
    chatApi: 'http://18.221.208.210:3004/', 
    imgApi:'http://18.221.208.210/public/butterflies/',
    timeout: HTTP_TIMEOUT,
    debug: true,
    bypass: false,
    angularProd: false
};



export const PROD: Environment = {
    mainApi: 'http://18.222.35.185:3000/',
    chatApi: 'http://18.222.35.185:3000',    
    imgApi:'http://18.222.35.185/chef_booking_rest_api/images/',
    timeout: HTTP_TIMEOUT,
    debug: false,
    bypass: false,
    angularProd: false
};

export const ENV: Environment = PROD;