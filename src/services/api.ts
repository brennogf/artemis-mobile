import { Profiles } from "@/src/types/models";
import axios from "axios";
import qs from "qs";

// GET profiles
export async function fetchProfiles(
  ip: string,
  port = "9696"
): Promise<Profiles[]> {
  const response = await axios.get<Profiles[]>(`http://${ip}:${port}/profiles`);
  return response.data;
}

// POST suspend
export async function toggleSuspend(
  ip: string,
  port: string,
  id: string,
  suspend: boolean
) {
  await axios.post(
    `http://${ip}:${port}/profiles/suspend/${id}`,
    qs.stringify({ suspend }),
    {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }
  );
}
