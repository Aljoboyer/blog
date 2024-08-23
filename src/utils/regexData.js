export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/; 

export const emailRegex = /\S+@\S+\.\S+/;

export const nameRegex = /^[A-Za-z\s]*$/;

export const facebookRegex = /^(https?:\/\/)?(www\.)?facebook\.com\/[A-Za-z0-9_.-]+\/?$/;

export const twitterRegex = /^(https?:\/\/)?(www\.)?twitter\.com\/[A-Za-z0-9_]+\/?$/;

export const instagramRegex = /^(https?:\/\/)?(www\.)?instagram\.com\/[A-Za-z0-9_.]+\/?$/;

export const googlePlusRegex = /^(https?:\/\/)?(plus\.google\.com|plus\.google\.com\/u\/0)\/(\d{21}|[A-Za-z0-9+._%-]+)\/?$/;
