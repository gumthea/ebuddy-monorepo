'use client';

import { Typography, Link } from "@mui/material";
import { useRouter } from "next/navigation";

interface Props {
  prompt?: string;
  href: string;
  linkText: string;
}

export default function RedirectText({ prompt = "Don't have an account?", href, linkText }: Props) {
  const router = useRouter();

  return (
    <Typography variant="caption" sx={{ display: 'block', textAlign: 'center' }}>
      {prompt} <Link href="#" onClick={() => router.push(href)}>{linkText}</Link>
    </Typography>
  );
}
