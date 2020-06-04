import regex from "./regex";

function reduce(variables) {
  return variables.map((variable) => {
    variable = variable.replace("${", "");
    variable = variable.replace("}", "");
    return variable;
  });
}

function transformToRegex(text, variableNames) {
  let newText = text;
  variableNames.forEach((variableName) => {
    newText = newText.replace(`\${${variableName}}`, regex[variableName]);
  });
  return newText;
}

export default function (toTransform) {
  const literals = toTransform.match(regex.literal);
  const variables = reduce(literals || []);
  const transformed = transformToRegex(toTransform, variables);
  return transformed;
}
