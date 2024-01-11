FROM node:10 as ember_app

COPY /src/ember-app /ember-app

WORKDIR /ember-app

RUN \
  set -x; \
  yarn global add ember-cli@3.1.4; \
  yarn global add bower;

RUN \
  set -x; \
  yarn install ; \
  bower install  --allow-root;

RUN \
  set -x; \
  ember build --environment=docker

FROM mcr.microsoft.com/dotnet/sdk:3.1 as backend

COPY /src/Stomatologicheskaya_Klinika /Stomatologicheskaya_Klinika

WORKDIR /Stomatologicheskaya_Klinika

RUN \
 dotnet restore Stomatologicheskaya_Klinika.sln;\
 dotnet build Stomatologicheskaya_Klinika.sln -c Release;\
 dotnet publish ODataBackend/Stomatologicheskaya_Klinika.ODataBackend.csproj -c Release -o out -f netcoreapp3.1

FROM mcr.microsoft.com/dotnet/aspnet:3.1

WORKDIR /app

COPY --from=backend /Stomatologicheskaya_Klinika/out ./
COPY --from=ember_app /ember-app/dist ./wwwroot/

# Check webapi responses
HEALTHCHECK --interval=60s --timeout=15s --start-period=20s \
  CMD curl -f "http://0.0.0.0/health" || exit

ENTRYPOINT ["dotnet", "Stomatologicheskaya_Klinika.ODataBackend.dll"]
