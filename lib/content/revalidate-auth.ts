export function isAuthorized(req: Request, secret: string | undefined): boolean {
  if (!secret) return false;
  const provided = req.headers.get("x-revalidate-secret");
  return provided === secret;
}
