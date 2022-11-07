import axios from "axios";

interface GetGroup {
  region: string;
  street_id: string;
  query: string;
}
export const getGroup = async ({ region,
  street_id,
  query }: GetGroup) => {

  try {
    const url = `https://yasno.com.ua/api/v1/electricity-outages-schedule/house?region=${region}&street_id=${street_id}&query=${query}`;
    const { data } = await axios.get<{ group: number }>(url);

    return data?.group;
  } catch (e) {
    console.error(e);
  }
}


