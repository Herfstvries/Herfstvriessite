import React from "react";

import Input from "./input/Input";
import Select from "./input/Select";
import Button from "./input/Button";
import Textarea from "./input/Textarea";
import Hidden from "./input/Hidden";

export default props => {
    switch (props.type) {
        case "textarea":
            return <Textarea {...props} />;
        case "submit":
            return <Button {...props} />;
        case "select":
            return <Select {...props} />;
        case "hidden":
            return <Hidden {...props} />;
        default:
            return <Input {...props} />;
    }   
};
