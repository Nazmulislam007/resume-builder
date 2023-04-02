export default function useFormattingError() {
  function formatingError(errors: string[]) {
    const formatingErrors: { [key: string]: string } = {};

    errors.forEach((error) => {
      const name = error.split(" ")[0];
      formatingErrors[name] = error;
    });

    return formatingErrors;
  }

  return { formatingError };
}
