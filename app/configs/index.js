export const browserRouter = !process.env.isDev;

export const basepath = process.env.basepath;

export const base = ['/', './'].includes(basepath) ? '' : basepath;

export const prefix = browserRouter ? base : `${base}/#`;
