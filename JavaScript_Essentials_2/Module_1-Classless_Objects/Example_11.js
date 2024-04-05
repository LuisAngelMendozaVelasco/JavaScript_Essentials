// 1.4.1 Multi-word keys

let contact = {
    "first name": "Ronald"
};

contact["first name"] = "Tim";
contact.first name = "Tim";     // SyntaxError: Unexpected identifier
contact."first name" = "Tim";   // SyntaxError: Unexpected string