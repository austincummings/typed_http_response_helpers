import * as hrh from "https://deno.land/x/http_response_helpers@0.1.1/mod.ts";

// Informational responses (100–199)

export function httpContinue<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.httpContinue(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function switchingProtocols<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.switchingProtocols(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function processing<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.processing(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function earlyHints<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.earlyHints(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

// Successful responses (200–299)

export function ok<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.ok(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function created<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.created(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function accepted<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.accepted(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function nonAuthoritativeInfo<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.nonAuthoritativeInfo(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function noContent<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.noContent(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function resetContent<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.resetContent(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function partialContent<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.partialContent(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function multiStatus<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.multiStatus(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function alreadyReported<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.alreadyReported(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function imUsed<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.imUsed(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

// Redirects (300–399)

export function multipleChoices<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.multipleChoices(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function movedPermanently<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.movedPermanently(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function found<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.found(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function seeOther<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.seeOther(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function notModified<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.notModified(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function useProxy<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.useProxy(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function temporaryRedirect<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.temporaryRedirect(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function permanentRedirect<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.permanentRedirect(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

// Client errors (400–499)

export function badRequest<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.badRequest(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function unauthorized<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.unauthorized(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function paymentRequired<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.paymentRequired(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function forbidden<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.forbidden(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function notFound<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.notFound(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function methodNotAllowed<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.methodNotAllowed(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function notAcceptable<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.notAcceptable(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function proxyAuthRequired<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.proxyAuthRequired(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function requestTimeout<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.requestTimeout(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function conflict<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.conflict(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function gone<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.gone(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function lengthRequired<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.lengthRequired(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function preconditionFailed<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.preconditionFailed(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function requestEntityTooLarge<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.requestEntityTooLarge(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function requestURITooLong<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.requestURITooLong(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function unsupportedMediaType<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.unsupportedMediaType(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function requestedRangeNotSatisfiable<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.requestedRangeNotSatisfiable(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function expectationFailed<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.expectationFailed(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function teapot<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.teapot(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function misdirectedRequest<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.misdirectedRequest(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function unprocessableEntity<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.unprocessableEntity(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function locked<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.locked(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function failedDependency<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.failedDependency(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function tooEarly<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.tooEarly(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function upgradeRequired<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.upgradeRequired(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function preconditionRequired<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.preconditionRequired(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function tooManyRequests<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.tooManyRequests(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function requestHeaderFieldsTooLarge<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.requestHeaderFieldsTooLarge(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function unavailableForLegalReasons<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.unavailableForLegalReasons(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

// Server errors (500–599)
export function internalServerError<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.internalServerError(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function notImplemented<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.notImplemented(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function badGateway<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.badGateway(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function serviceUnavailable<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.serviceUnavailable(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function gatewayTimeout<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.gatewayTimeout(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function hTTPVersionNotSupported<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.hTTPVersionNotSupported(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function variantAlsoNegotiates<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.variantAlsoNegotiates(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function insufficientStorage<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.insufficientStorage(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function loopDetected<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.loopDetected(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function notExtended<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.notExtended(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}

export function networkAuthenticationRequired<T>(
  body?: T,
  init?: hrh.ResponseInitWithoutStatus
): Response {
  return hrh.networkAuthenticationRequired(JSON.stringify(body), {
    ...init,
    headers: {
      ...init?.headers,
      "Content-Type": "application/json",
    },
  });
}
