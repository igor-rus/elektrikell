import moment from "moment";

export const getDefaultFrom = () => moment().subtract(10, 'hours').format();
export const getDefaultUntil = () => moment().add(1, 'day').format();

export const convertToDatepickerFormat = (dateTime) => moment(dateTime).format("YYYY-MM-DDTHH:mm");
export const convertToApiDateFormat = (dateTime) => moment(dateTime).format();

export const currentTimestamp = () => moment().minutes(0).seconds(0).unix();