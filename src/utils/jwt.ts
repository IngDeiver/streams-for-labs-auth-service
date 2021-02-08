import { IUser } from 'interfaces'
import jwt from 'jsonwebtoken'

export const sign =  (data: IUser ) => {
    const privateKey = `-----BEGIN RSA PRIVATE KEY-----
    MIIEpAIBAAKCAQEAst0QhV3d+owVRDE9qy1RjqG67cij32bt+0PutmZKzGnU2+A6
    JQ2wxTg9q89MoYN+mnyNgcURMwgK+MbyfvqWLSaNK88KexI2GQ4IDFLldHk25VSZ
    HnrkYBl9vxIqGYSlWRGlTVPoCCvx8f+CNCyVomEU9g98N0cUtp/873hSp6jEyzP7
    6ZKP9gY7ykF8QcjnpU/+5gPxlBtdp69c7VUREk8654NskW6HVgGVJLE3hAUGcvdF
    FGIJhslDgA864e5v6/vG5xL5wutFMIoGALNPVq2BgZ50wnqP0s/Zgw8bCtZQCQH1
    Elxmr7heStYxGqM9La1mfQs9ZBitEiNud8VGWwIDAQABAoIBACSvlu3j3N3A0bPU
    7bMobmv03CRdXM87i2BYBKRAwuK+ajxW91YWQsWQzYVp1WvjTppdJaESTH7NDYMN
    Ozu0Jg1ItPfhVWL8zz/AUwJEFnAXVJ0hBu7rgd/8GoCQNzZYsJleNytvJE5YxR0/
    rPMKmf5eLzBw6Kdl2ufCVNzBLyLX8PcRt+9viDCvW4vRLjWxVGZAgpJMryRYh/Tx
    /4XOCfDg1HJ5YlqNnu2KhWnkPrJ9TMiLSdAbCnxhDMMQb7X1qEFJ+gJPY7CB/rik
    73GqHl4WXY1/Xj4GDRcZQd+PMbiZBER8PpD2As0CMSqCDTA0tgVAc4GMDfCsBoz3
    GGzCS4ECgYEA38n2H6dLoKBPDex+mW8xiq4TtQksBUo0+hnIeD/nUmbMD6jt9V0j
    liL2L5cghUmn9up+B/om3Rz2VkKtpCcpgFSrkpZ1gfGfIbyKPqOBfWZl7SqygdT9
    fBNj0dJvNJHl2pN8jfxJfCbYfxDjFQVSWw/7l665aoojqe3QnckrkGECgYEAzJu4
    TJnkq8KCCjEp4TTLgYoq8Sy7QI+vr75Qi3m2Hq0is22NLzdXJAbfARCZj1LubKCB
    udG6/aaCa/YrQiAF/SIH9jkzlDv+CA32tjZaAQNsuUA9p/DferhUqaGY1E7ClR74
    y0bky1HkcHyVTQYBgBL7fykiLvAp+Ll9LrCbADsCgYEAyKzCGABcwN0ABuxbWhtr
    wX/4DA79eoDgoKUeLzaeqDWmJyTEvZGXp7oSKPrMHrm99JyyB1U6JG0kOJXyP5Ee
    lgVXFUv2c1/H4ui+zwyvwVNhcxsml2X3KJv6ltys++cYxrgaqPfirYHoAYmTF/Z9
    s0rRwWLcwby93lNzDwqmFgECgYB8HoqyjTiWqSvRmvlY0HoTXwmlvAjrpT5iUgTy
    VycPfN/sEKzw05VdGX32W2eL9jcEVmnbm0rfzD6Z139uYZbAdAB4cULEzY/QuwfK
    iTYYH0e5KSs90XUAMQnKzWi0ggKwC1XJmnv4ivkU875uNxJ56wn9napK5w3PAFbc
    F+4vOQKBgQDdE7NdlPVtKrJxVzRWCWRBW5MNHrIzaQxTj8+5h6ClSiMA6Low5KMQ
    mEc6kHNoQ/TAkZ+VgTXLmvnm1EX5KOumaXdoLfaQ/OYh9JJ2bpU3U3lEciOQK0F3
    4GVyoIZIdDg1nNFRYSnR2iDmC2MIn5xYKvZJ4E08x/IhEMUs6xb5zw==
    -----END RSA PRIVATE KEY-----`.replace(/\n\s+/g, "\n")
    return jwt.sign(JSON.stringify(data), privateKey, { algorithm: 'RS256' })
}

// const verify = (token: string) => {
//     const publicKey = process.env.JWT_PUBLIC_KEY || ""
//     return jwt.verify(token, publicKey)
// }