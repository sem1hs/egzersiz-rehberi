import { useFormik } from "formik";
import { useSearchParams } from "react-router-dom";
import * as Yup from "yup";

const Form = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const formik = useFormik({
    initialValues: {
      search: searchParams.get("name") || "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      search: Yup.string()
        .min(3, "En az 3 karakter giriniz")
        .required("Arama zorunludur"),
    }),
    onSubmit: (values) => {
      const params = new URLSearchParams();
      params.append("name", values.search.toLowerCase());
      setSearchParams(params);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="min-w-44 md:min-w-3xl md:h-12 h-10 ml-4 md:ml-0"
    >
      <input
        type="text"
        name="search"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.search}
        placeholder="Egzersiz ara..."
        className="h-full w-full text-lg p-3 border border-gray-300 rounded text-gray-100"
      />
    </form>
  );
};

export default Form;
