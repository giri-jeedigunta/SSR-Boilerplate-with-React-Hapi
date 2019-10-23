import { renderToString } from "react-dom/server";
import htmlTemplate from './htmlTemplate';

const reactHandler = (request, h) => {
    return "<!DOCTYPE html>"+renderToString(htmlTemplate(request));
};

export default reactHandler;